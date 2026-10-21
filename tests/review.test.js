import {test} from 'node:test';
import assert from 'node:assert/strict';
import {eligibleReview} from '../extension/review.js';
const now=20*86400000;
const ready={firstAt:0,count:5,days:['one','two','three']};
test('review notice waits for repeated use across a week and respects dismissal',()=>{assert.equal(eligibleReview(ready,now),true);for(const state of [null,{...ready,count:4},{...ready,days:['one']},{...ready,firstAt:now-86400000},{...ready,handled:true}])assert.equal(eligibleReview(state,now),false);});
