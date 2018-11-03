"use strict";
module.exports = (chai, utils) => {

  const propertyNames = Object.getOwnPropertyNames(chai.Assertion.prototype);

  const propertyDescs = {};
  for (const name of propertyNames) {
    propertyDescs[name] = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, name);
  }

  const methodNames = propertyNames.filter(name => {
    return name !== "assert" && typeof propertyDescs[name].value === "function";
  });

  chai.Assertion.addProperty('each', function () {
    const each = utils.flag(this, 'each') || 0;
    utils.flag(this, 'each', each + 1);
  });

  methodNames.forEach(methodName => {
    chai.Assertion.overwriteMethod(methodName, function (_super) {
      return function assertEach () {
        if (utils.flag(this, 'each')) {
          const each = utils.flag(this, 'each');
          utils.flag(this, 'each', each - 1);
          var obj = this._obj;

          new chai.Assertion(obj).is.an.instanceOf(Array);
          obj.map(item => {
            const that = cloneAssertion(this);
            utils.flag(that, 'object', item);
            _super.apply(that, arguments);
            return utils.flag(that, 'object');
          });
      } else {
        _super.apply(this, arguments);
      }
    };
    });
  });

  function cloneAssertion(original) {
    const copy = Object.create(original);
    utils.transferFlags(original, copy, false);

    return copy;
  }
};

