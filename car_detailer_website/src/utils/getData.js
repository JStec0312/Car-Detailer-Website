import {client} from "@/sanity/client";

export async function getServices() {
  const query = `*[_type == "service"]{
    _id,
    title,
    description,
    img
  }`;

  try {
    const options = { next: { revalidate: 30 } };
    const services = await client.fetch(query, {}, options );
    return services;
  } catch (error) {
    console.error("Błąd pobierania usług z Sanity:", error);
    return [];
  }
}

export async function getBeforeAfter(){
const query = `*[_type == "beforeAfter"]{
  _id,
  before,
  after,
  description
}`;


  try {
    const options = { next: { revalidate: 30 } };
    const beforeAfter = await client.fetch(query, {}, options);
    return beforeAfter;
  } catch (error) {
    console.error("Błąd pobierania obrazów przed i po z Sanity:", error);
    return [];
  }
}