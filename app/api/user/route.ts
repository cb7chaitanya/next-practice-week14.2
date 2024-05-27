import { NextRequest } from "next/server"

export function GET(){
    return Response.json({
        name: 'Chaitanya',
        email: 'pC6wH@example.com'
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)
    return Response.json({
        message: "You are logged in"
    })
}
