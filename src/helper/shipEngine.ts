import ShipEngine from "shipengine";

const apiKey = process.env.SHIPENGINE_API_KEY;

if (!apiKey) {
  throw new Error("SHIPENGINE_API_KEY is missing in environment variables.");
}

const shipEngine = new ShipEngine({
  apiKey: apiKey,
});

export { shipEngine };
