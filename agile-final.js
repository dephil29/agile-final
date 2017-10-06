// Challenge 1
// Take the code below, and add a feed function that modifies foodLevel accordingly.

let wolf = {
    foodLevel: 10,
    setHunger: function() {
        const hungerInterval = setInterval(() => {
            this.foodLevel--;
            if (this.didYouGetEaten() == true) {
                clearInterval(hungerInterval);
                return 'You got eaten!';
            }
        }, 1000);
    },
    didYouGetEaten: function() {
        if (this.foodLevel > 0) {
            return false;
        } else {
            return true;
        }
    },
    feed: function(x) {
        return this.foodLevel += x;
    }
};

// Challenge 2
// You will get an array of integers. You should return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// Try not to use a brute force approach... If you no idea what I'm talking about, disregard.

function twoSum(nums, target) {
    var map = [];
    var indexnum = [];

    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] != null) {
            index = map[nums[i]];
            indexnum[0] = index;
            indexnum[1] = i;
            break;
        } else {
            map[target - nums[i]] = i;
        }
    }
    return indexnum;
}

console.log(twoSum([2, 7, 11, 15], 9));
// Challenge 3
// Given two (dic­tio­nary) words as Strings, deter­mine if the following applies.
// Verify if the let­ters in one word can be remapped to get the sec­ond word. Remap­ping a
//let­ter means replac­ing all occur­rences of it with another let­ter while the
// order­ing of the let­ters remains unchanged. No two let­ters may map to the same let­ter, but a
//let­ter may map to itself. if the let­ters in one word can be remapped to get the
// sec­ond word. Remap­ping a let­ter means replac­ing all occur­rences of it with another
//let­ter while the order­ing of the let­ters remains unchanged. No two let­ters may
// map to the same let­ter, but a let­ter may map to itself.
// Examples:
//"foo", "app"; returns true
//"bar", "foo"; returns false
//"turtle", "tletur"; returns true
//"ab", "ca"; returns true


var words = ["turtle", "tletur"];

function hard(str1, str2){
  if(str1.length != str2.length){
    return "Not gonna happen"
  }else{
    return "too hard"
  }
}

var myMap = new Map();

myMap.set("turtle");
myMap.set("tletur");

for (var [key, value] of myMap) {
  console.log(key + '=' + value);
}

for (var key of myMap.keys()) {
  console.log(key);
}

for (var value of myMap.values()) {
  console.log(value)
}

for (var [key, value] of myMap.entries()) {
  console.log(key + '=' + value);
}
// var keyString = "turtle", "tletur",
//                  keyObj = {},
//                  keyFunc = function(string1, string2) {
//                    if (string1 === string2) {
//
//                    }
//                  };
