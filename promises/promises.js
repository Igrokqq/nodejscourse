// old style code

const result = doAnything(1, 2, (value, error) => {
  if (error) {
    throw error;
  }

  console.log(value);
})


// for a while style code

const result1 = new Promise((resolve, reject) => {
  if (1 + 2 === 3) {
    resolve();
  } else {
    reject();
  }
});


// actual approach

async function getResult(a, b) {
  return a + b;
}

async function main() {
  try {
    const a = await getResult(1, 2);

    console.log(a);
  } catch (error) {
    console.error(error);
  }
}

main().catch(console.error);
