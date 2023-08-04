import usePlatForms from "./usePlatforms";

const usePlatForm = (id?: number) => {
  const { data: platforms } = usePlatForms();
  return platforms?.results.find((g) => g.id === id);
};

export default usePlatForm;
