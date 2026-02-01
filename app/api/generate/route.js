import clientPromise from "@/lib/mongodb"
export async function POST(request){
    const body = await request.json()
    let url = body.url.trim();
    if (!url.startsWith("http")) {
      url = "https://" + url;
    }
    let shorturl = body.shorturl.trim().toLowerCase();
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection('url')
    const doc = await collection.findOne({shorturl:body.shorturl})
    if (doc){
        return Response.json({
            success:false,error:true,message:"url already exists!"
        })
    }
    const result = await collection.insertOne({
        url: url,
        shorturl: shorturl
    })
    return Response.json({
        success:true,
        error:false,
        message:'url Generated successfully'
    })
}