function add(x, y) {
  return x.a + y.a;
}

const obj1 = { a: 1 };

const obj2 = { a: "hello" };

add(obj1, obj1);
add(obj2, obj2);
