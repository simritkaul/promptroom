import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover and Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro soluta autem numquam dignissimos ad accusantium sint rem inventore ducimus.</p>
      <Feed />
    </section>
  )
}

export default Home