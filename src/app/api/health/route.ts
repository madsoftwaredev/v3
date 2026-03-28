import { NextResponse } from "next/server";

/**
 * Health check endpoint — returns 200 with status info.
 * Useful for uptime monitoring, load balancer checks, and CI smoke tests.
 *
 * GET /api/health
 */
export function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
