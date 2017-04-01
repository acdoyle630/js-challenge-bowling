/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const bowling = require('../bowling.js');
let myBowlingModule = bowling();

describe('bowling module', ()=>{
  it('should be a function', () => {
    expect(bowling).to.be.a('function');
  });
  it('should total scores from frame',()=> {
    expect(bowling([{1:3, 2:5}])).to.be.equal(8);
  });
  it('should add next two rolls for strike',()=>{
    expect(bowling([{1:3,2:3}, {1:10}, {1:2, 2:4}])).to.be.equal(28);
  });
  it('should add next roll for a spare',() =>{
    expect(bowling([{1:9, 2:1}, {1:3, 2:5}])).to.be.equal(21);
  });
  it('should be able to calculate strkes and spares',() =>{
    expect(bowling([{1:9, 2:1}, {1:10}, {1:5, 2:4}])).to.be.equal(48);
  });
  it('should extend 10th frame if strike or spare',()=>{
    expect(bowling([{1:9, 2:1}, {1:10}, {1:5, 2:4}, {1:2, 2:4}, {1:4, 2:6}, {1:1, 2:1}, {1:5, 2:1}, {1:4, 2:4}, {1:10}, {1:1, 2:1}])).to.be.equal(95);
  });
  it('should add bounus third ball to spare in 10th  ',() =>{
    expect(bowling([{1:9, 2:1}, {1:10}, {1:5, 2:4}, {1:2, 2:4}, {1:4, 2:6}, {1:1, 2:1}, {1:5, 2:1}, {1:4, 2:4}, {1:10}, {1:1, 2:9, 3:2}])).to.be.equal(115);
  });
  it('should add bounus ball for strike in 10th', ()=>{
    expect(bowling([{1:9, 2:1}, {1:10}, {1:5, 2:4}, {1:2, 2:4}, {1:4, 2:6}, {1:1, 2:1}, {1:5, 2:1}, {1:4, 2:4}, {1:10}, {1:10, 2:9, 3:1}])).to.be.equal(130);
  });
});

/*describe( 'roll function', () =>{
  beforeEach( () => {
    myBowlingModule = bowling();
  });
  it('should be a function', () => {
    expect(myBowlingModule.roll).to.be.a('function');
  });
  it('should take a number parameter or throw error', () => {
    expect(myBowlingModule.roll.bind(null, 'hello')).to.throw(Error);
  });
  it('rolls cannot total more than ten', () => {
    expect(myBowlingModule.roll.bind(null, 11)).to.throw(Error);
  });
  it( 'should add num to score if <= 10', () => {
    expect(myBowlingModule.roll(5)).to.be.equal(5);
  });
});



describe( 'scoring function', () => {
  beforeEach( () => {
    myBowlingModule = bowling();
  });
  it('should return total score',() => {
    expect(myBowlingModule.checkScore()).to.be.a('number');
  });
  it('should end after frame 10',() => {
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    expect(myBowlingModule.checkFrame()).to.be.equal(3);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    expect(myBowlingModule.checkFrame()).to.be.equal(6);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(2);
    myBowlingModule.roll(1);
    myBowlingModule.roll(1);
    expect(myBowlingModule.checkFrame()).to.be.equal('Game Over score: 38');
    expect(myBowlingModule.roll.bind(null, 6)).to.throw(Error);
  });
  it('should add next 2 rolls if strike',() => {
    myBowlingModule.roll(10);
    myBowlingModule.roll(3);
    myBowlingModule.roll(4);
    myBowlingModule.roll(10);
    myBowlingModule.roll(10);
    myBowlingModule.roll(1);
    myBowlingModule.roll(1);
    expect(myBowlingModule.scoreCard()).to.be.equal(59);

  });
  it('should add next roll on spare', () => {
    myBowlingModule.roll(10);    //1  (strike)
    myBowlingModule.roll(3);
    myBowlingModule.roll(4);    //2
    myBowlingModule.roll(10);   //3 (strike)
    myBowlingModule.roll(10);   //4 (strike)
    myBowlingModule.roll(1);
    myBowlingModule.roll(1);    //5
    myBowlingModule.roll(5);
    myBowlingModule.roll(5);    //6 (spare)
    myBowlingModule.roll(4);
    expect(myBowlingModule.scoreCard()).to.be.equal(77);
  });
});*/