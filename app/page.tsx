import client from "@/db"
async function getUserDetails() {
  const user = await client.user.findFirst()
  return {
    email: user?.email,
    name: "chaitanya"
  }
}

export default async function Home() {
  const data = await getUserDetails()
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data.name}
                </div> 
                {data.email}
            </div>
        </div>
    </div>
  );
}
