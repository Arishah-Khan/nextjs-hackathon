import { NextRequest } from "next/server";
import { Address, Package } from "../../../../../type";
import { shipEngine } from "@/helper/shipEngine";

export async function POST(req: NextRequest) {
  try {
    const { shipeToAddress, packages }: { shipeToAddress: Address; packages: Package[] } = await req.json();

    // Validate required fields
    if (!shipeToAddress || !packages) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: shipeToAddress and packages",
        }),
        { status: 400 }
      );
    }

    // Validate 'name' property in both addresses
    if (!shipeToAddress.name) {
      return new Response(
        JSON.stringify({
          error: "The 'shipeToAddress' must contain a 'name' property.",
        }),
        { status: 400 }
      );
    }

    const shipFromAddress: Address = {
      name: "Michael Smith",
      phone: "+1 555 987 6543",
      addressLine1: "456 Oak Avenue",
      addressLine2: "Suite 200",
      cityLocality: "Los Angeles",
      stateProvince: "CA",
      postalCode: "90001",
      countryCode: "US",
      addressResidentialIndicator: "no", // Indicates a commercial address
    };

    // Log the addresses for debugging
    console.log("Ship To Address:", shipeToAddress);
    console.log("Ship From Address:", shipFromAddress);

    console.log("Ship To Address Name:", shipeToAddress?.name);
console.log("Ship From Address Name:", shipFromAddress?.name);


    // Check if 'name' is missing in 'shipFromAddress'
    if (!shipeToAddress?.name || !shipFromAddress?.name) {
      console.error("Missing name in address.");
      return new Response(
        JSON.stringify({ error: "Missing name property in address" }),
        { status: 400 }
      );
    }
    

    // Fetch shipping rates from ShipEngine
    let shipmentDetails;
    try {
      console.log("Sending request to ShipEngine with:", {
        shipTo: shipeToAddress,
        shipFrom: shipFromAddress,
      });
    
      shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
        shipment: {
          shipTo: shipeToAddress,
          shipFrom: shipFromAddress,
          packages: packages,
        },
        rateOptions: {
          carrierIds: [
            process.env.SHIPENGINE_FIRST_COURIER || "default_carrier_1",
          ],
        },
      });
    
      console.log("Shipment Details:", shipmentDetails);
    } catch (error) {
      console.error("Error in getRatesWithShipmentDetails:", error);
      return new Response(
        JSON.stringify({ error: "Error while calling ShipEngine" }),
        { status: 500 }
      );
    }
    

    // Log shipmentDetails for debugging
    console.log("Shipment Details:", shipmentDetails);

    // Return the response with shipment details
    return new Response(
      JSON.stringify({ shipeToAddress, packages, shipmentDetails }),
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error fetching shipping rates:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      { status: 500 }
    );
  }
}
