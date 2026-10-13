async function main() {
  const requirement = "User should be able to login using a valid username and password.";
  const appUrl = "https://www.saucedemo.com/";
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3.2",
      prompt: `You are a Senior QA Engineer. Application URL: ${appUrl} Analyze this requirement: ${requirement}`,
      stream: false
    })
  });

  const data = await response.json();

  console.log(data.response);
}

main();