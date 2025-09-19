import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
        const searchParams = req.nextUrl.searchParams;

        const lat = searchParams.get("lat");
        const lon = searchParams.get("lon");
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`; 

        const dailyRes = await fetch(url, {
            next: {revalidate: 3600},
        });

        const dailyData = await dailyRes.json();

        return NextResponse.json(dailyData);
    } catch (error) {
        console.error("Error in getting daily data ");
        return new Response("Error in getting daily data ", {status: 500});
    }
}