export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container py-10 mx-auto lg:w-1/2 px-6 mt-4 lg:mt-0 text-center lg:text-center">
        <h1 className="text-5xl font-medium text-white mb-4">Contact</h1>
        <h2 className="text-lg leading-relaxed mb-8"></h2> Via Email:{" "}
        <a
          href="mailto:stefano.borrelli@gmail.com"
          className="text-rose-500 leading-relaxed text-xl mb-8 hover:text-rose-100 transition duration-300 ease-in-out"
        >
          stefano.borrelli@gmail.com
        </a>
        <h1 className="text-xl">
          © 2024 Stefano Borrelli. All rights reserved.
        </h1>
      </div>
    </section>
  );
}
