const monster1 = { eyeCount: 4 };

const handler1 = {
  set(obj, prop, value) {
    console.log("나 변했어~");
    return Reflect.set(...arguments);
  },
};

const proxy1 = new Proxy(monster1, handler1);

proxy1.eyeCount = 1;
// Expected output: "나 변했어~"
console.log(proxy1.eyeCount);
// Expected output: 1

proxy1.eyeCount = 2;
// Expected output: "나 변했어~"
console.log(proxy1.eyeCount);
// Expected output: 2
