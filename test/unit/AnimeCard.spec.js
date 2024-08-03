import { shallowMount } from "@vue/test-utils";
import AnimeCard from "@/components/AnimeCard.vue";

describe("AnimeCard.vue", () => {
  it("renders props.anime when passed", () => {
    const anime = {
      mal_id: 1,
      title: "Test Anime",
      images: {
        jpg: {
          image_url: "https://example.com/image.jpg",
        },
      },
      synopsis: "This is a test synopsis",
    };
    const wrapper = shallowMount(AnimeCard, {
      props: { anime },
    });
    expect(wrapper.text()).toContain("Test Anime");
    expect(wrapper.text()).toContain("This is a test synopsis");
  });
});
