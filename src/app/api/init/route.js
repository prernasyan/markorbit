// src/app/api/init/route.js
import { initializeDatabase, resetDatabase } from "../database-initializer.js";

export async function GET() {
  try {
    const result = await initializeDatabase();
    return Response.json(result);
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));

    if (body.reset === true) {
      const result = await resetDatabase();
      return Response.json(result);
    } else {
      const result = await initializeDatabase();
      return Response.json(result);
    }
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
