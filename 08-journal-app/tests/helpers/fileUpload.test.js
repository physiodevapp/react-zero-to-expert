import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: process.env.VITE_CLOUD_NAME,
  api_key: process.env.VITE_API_KEY,
  api_secret: process.env.VITE_API_SECRET,
  secure: true
});

describe("Testing fileUpload", () => {
  test("should upload file to cloudinary succesfully", async () => {
    const imageUrl =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '')
    // console.log({imageId})

    const cloudResp = await cloudinary.api.delete_resources([`journal-app/${imageId}`], {
      resource_type: 'image'
    })

  });

  test("should return null value", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
