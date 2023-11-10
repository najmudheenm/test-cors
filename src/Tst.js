export default function fetchWithTimeout(url, options, timeout = 10000, error) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(error ?? "Request timed out")), timeout)
    ),
  ]);
}
