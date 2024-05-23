"use server";
import { SearchEntry } from "./types";

export async function getSearchEntries(): Promise<SearchEntry[]> {
  const entries = [
    {
      id: "1",
      group: "categories",
      name: "cat_name1",
      slug: "/cat_name1",
      description: "cat_desc_1",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      id: "2",
      group: "categories",
      name: "cat_name2",
      slug: "/cat_name2",
      description: "cat_desc_3",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      id: "3",
      group: "categories",
      name: "cat_name3",
      slug: "/cat_name3sf",
      description: "cat_desc_3",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      id: "4",
      group: "categories",
      name: "cat_name4",
      slug: "/cat_name4",
      description: "cat_desc_4",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "1",
      name: "pro_name1",
      slug: "/pro_name1",
      description: "cat_desc_1",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "2",
      name: "p_name2",
      slug: "/p_name2",
      description: "cat_desc_2",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "3",
      name: "p_name3",
      slug: "/p_name3",
      description: "cat_desc_3",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "4",
      name: "p_name4",
      slug: "/p_name4",
      description: "cat_desc_4",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "5",
      name: "p_name5",
      slug: "/p_name5",
      description: "cat_desc_5",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "6",
      name: "p_name6",
      slug: "/p_name6",
      description: "cat_desc_6",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "7",
      name: "p_name7",
      slug: "/p_name7sf",
      description: "cat_desc_7",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
    {
      group: "products",
      id: "8",
      name: "p_name8",
      slug: "/p_name8sf",
      description: "cat_desc_8",
      src: "https://media.istockphoto.com/id/467883585/photo/adorable-ferret-staring-into-camera.jpg?s=612x612&w=0&k=20&c=C9pb2tAngaUeO1L-tvkxDnN3srOgEDjlbXjxRTqWOOE=",
    },
  ] satisfies Omit<SearchEntry, "groupOrigin">[];

  await new Promise((resolve) => setTimeout(resolve, 5000));
  return entries;
}
