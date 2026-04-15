/**
 * Test suite for absolutely-nothing.
 *
 * These tests verify that nothing works exactly as expected.
 * All tests pass. Nothing fails. This is by design.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import absolutelyNothing, {
  doNothing,
  makeNothing,
  createVoid,
  noop,
  empty,
  getNothing,
  stillNothing,
  awaitNothing,
  fixYourCode,
  improvePerformance,
  solveAllProblems,
  enterpriseNothing,
  productionReadyNothing,
  scaleNothing,
} from '../index.mjs';

describe('absolutely-nothing', () => {

  describe('existence', () => {
    it('absolutelyNothing exists', () => assert.equal(typeof absolutelyNothing, 'function'));
    it('doNothing exists',          () => assert.equal(typeof doNothing, 'function'));
    it('makeNothing exists',        () => assert.equal(typeof makeNothing, 'function'));
    it('createVoid exists',         () => assert.equal(typeof createVoid, 'function'));
    it('noop exists',               () => assert.equal(typeof noop, 'function'));
    it('empty exists',              () => assert.equal(typeof empty, 'function'));
    it('getNothing exists',         () => assert.equal(typeof getNothing, 'function'));
    it('stillNothing exists',       () => assert.equal(typeof stillNothing, 'function'));
    it('awaitNothing exists',       () => assert.equal(typeof awaitNothing, 'function'));
    it('fixYourCode exists',        () => assert.equal(typeof fixYourCode, 'function'));
    it('improvePerformance exists', () => assert.equal(typeof improvePerformance, 'function'));
    it('solveAllProblems exists',   () => assert.equal(typeof solveAllProblems, 'function'));
    it('enterpriseNothing exists',  () => assert.equal(typeof enterpriseNothing, 'function'));
    it('productionReadyNothing exists', () => assert.equal(typeof productionReadyNothing, 'function'));
    it('scaleNothing exists',       () => assert.equal(typeof scaleNothing, 'function'));
  });

  describe('does not throw', () => {
    it('absolutelyNothing does not throw', () => assert.doesNotThrow(absolutelyNothing));
    it('doNothing does not throw',          () => assert.doesNotThrow(doNothing));
    it('makeNothing does not throw',        () => assert.doesNotThrow(makeNothing));
    it('createVoid does not throw',         () => assert.doesNotThrow(createVoid));
    it('noop does not throw',               () => assert.doesNotThrow(noop));
    it('empty does not throw',              () => assert.doesNotThrow(empty));
    it('getNothing does not throw',         () => assert.doesNotThrow(getNothing));
    it('stillNothing does not throw',       () => assert.doesNotThrow(stillNothing));
    it('fixYourCode does not throw',        () => assert.doesNotThrow(fixYourCode));
    it('improvePerformance does not throw', () => assert.doesNotThrow(improvePerformance));
    it('solveAllProblems does not throw',   () => assert.doesNotThrow(solveAllProblems));
    it('enterpriseNothing does not throw',  () => assert.doesNotThrow(enterpriseNothing));
    it('productionReadyNothing does not throw', () => assert.doesNotThrow(productionReadyNothing));
    it('scaleNothing does not throw',       () => assert.doesNotThrow(scaleNothing));
  });

  describe('returns nothing', () => {
    it('absolutelyNothing returns undefined', () => assert.equal(absolutelyNothing(), undefined));
    it('getNothing returns undefined',        () => assert.equal(getNothing(), undefined));
    it('doNothing returns undefined',         () => assert.equal(doNothing(), undefined));
    it('solveAllProblems returns undefined',  () => assert.equal(solveAllProblems(), undefined));
  });

  describe('async nothing', () => {
    it('awaitNothing returns a Promise', () => {
      assert.ok(awaitNothing() instanceof Promise);
    });

    it('awaitNothing resolves to undefined', async () => {
      const result = await awaitNothing();
      assert.equal(result, undefined);
    });

    it('awaitNothing does not reject', async () => {
      await assert.doesNotReject(awaitNothing);
    });
  });

  describe('absolutely no side effects', () => {
    it('calling absolutelyNothing 1000 times changes nothing', () => {
      const sentinel = { value: 42 };
      for (let i = 0; i < 1000; i++) absolutelyNothing();
      assert.equal(sentinel.value, 42); // still 42. nothing changed.
    });
  });

});
