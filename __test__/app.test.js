import React, { Component } from 'react';
import App from '../src/App';
import ShallowRenderer from 'react-test-renderer/shallow';
import { WebSocket } from 'mock-socket';
global.WebSocket = WebSocket;
import Socket from '../src/socket.js';

const connected = "";
const activeFeed = null;
const renderer = new ShallowRenderer();
renderer.render(<App connected={connected} activeFeed={activeFeed}/>);
const result = renderer.getRenderOutput();
const wrapper = mount(<App />);

describe("<App />", () => {
  describe("#render", () => {
    test("renders a div element", () => {
      expect(result.type).toBe('div');
    });
  });
  describe("#onConnect", () => {
    test("sets connected state to true", () => {
      expect(wrapper.state("connected")).toBe(false);
      wrapper.instance().onConnect();
      expect(wrapper.state("connected")).toBe(true);
      wrapper.instance().onDisconnect();
    });
    test("calls #emit", () => {
      const msg = {"feed": {"id": 1}, "name": "My post name", "text": "My post text"};
      const spy = jest.spyOn(Socket.prototype, 'emit');
      wrapper.instance().onConnect();
      expect(spy).toHaveBeenCalledWith('post add', msg );
      wrapper.instance().onDisconnect();
    });
  });
  describe("#onDisconnect", () => {
    test("it resets state", () => {
      expect(wrapper.state("connected")).toBe(false);
      wrapper.instance().onConnect();
      expect(wrapper.state("connected")).toBe(true);
      wrapper.instance().onDisconnect();
      expect(wrapper.state("connected")).toBe(false);
    });
  });
  describe("#onClick", () => {
    test("it resets state", () => {
      expect(wrapper.state("connected")).toBe(false);
      wrapper.instance().onConnect();
      expect(wrapper.state("connected")).toBe(true);
      wrapper.instance().onDisconnect();
      expect(wrapper.state("connected")).toBe(false);
    });
  });
  describe("#addFeed", () => {
    const address = "Makers Academy";
    test("sets activeFeed to address passed in", () => {

      expect(wrapper.state("activeFeed")).toBe(null);
      wrapper.instance().addFeed(address);
      expect(wrapper.state("activeFeed")).toBe(null);
    });
    test("calls #emit", () => {
      const addr = {"address": "Makers Academy"};
      const spy = jest.spyOn(Socket.prototype, 'emit');
      wrapper.instance().addFeed(addr);
      expect(spy).toHaveBeenCalledWith('feed add', addr );
      wrapper.instance().onDisconnect();
    });
  });
  describe("#onAddFeed", () => {
    test("adds activeFeed to feeds", () => {
      const address = "Makers Academy";
      const feed = { address: address}
      wrapper.instance().addFeed(address);
      wrapper.instance().onAddFeed(feed);
      expect(wrapper.state("feeds")).toContain(feed)
    });
    test("won't add non-activeFeed to feeds", () => {
      const nonActiveFeed = "General Assembly";
      wrapper.instance().onAddFeed(nonActiveFeed);
      expect(wrapper.state("feeds")).not.toContain({nonActiveFeed})
    });
  });
  describe("#postSubscribe", () => {
    test("sets activeFeed to feedId", () => {
      const feed = "12345"
      wrapper.instance().postSubscribe();
      expect(wrapper.state("activeFeed")).toEqual(null)
    });
  });
  describe("#userSignUp", () => {
    test("triggers an event emitter", () => {
      const user = {
        postcode: '12345',
        username: 'david',
        email: 'david@email.com',
        password: '12345'
      }
      const spy = jest.spyOn(Socket.prototype, 'emit')
      wrapper.instance().userSignUp(user);
      expect(spy).toHaveBeenCalledWith('user signup', user);
      wrapper.instance().onDisconnect();
    });
  });
  describe("#userLogin", () => {
    test("triggers an event emitter", () => {
      const userCredentials = {
        email: 'makers@makersacademy.com',
        password: '12345'
      }
      const spy = jest.spyOn(Socket.prototype, 'emit')
      wrapper.instance().userLogin(userCredentials);
      expect(spy).toHaveBeenCalledWith('user login', userCredentials);
      wrapper.instance().onDisconnect();
    });
  });
  describe("#addPost", () => {
    const postContents = {
      name: "My post name",
      text: "My post text",
      feed: {id: 1}
    }
    const spy = jest.spyOn(Socket.prototype, 'emit')
    wrapper.instance().addPost(postContents);
    expect(spy).toHaveBeenCalledWith('post add', postContents);
    wrapper.instance().onDisconnect();
  })
});
