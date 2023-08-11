import useWeb3Forms from '@web3forms/react';


export const Contact = () => {

  // W3Forms submit
  const accessKey = '0df697b2-c77a-4f42-b4be-5176bda52c34';
  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'Leonhard Link',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (message, data) => {
      console.log(message);
    },
    onError: (message, data) => {
      console.log(message);
    },
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    submit({
      name: formJson.name,
      email: formJson.email,
      message: formJson.message,
    })
  }

  return (

    <div className="bg-indigo-600 dark:bg-indigo-700 text-gray-100 dark:text-gray-300 text-xl p-8 grid grid-cols-12 shadow-2xl">

      <div className="col-start-1 col-end-13 lg:col-end-6 xl:col-end-7 pr-8">
        <h1 className="font-headline text-6xl text-tealsat-600 dark:text-teal-500 mb-8">Contact</h1>
        <p>If you are interested in working together, use this form or contact me via
          Email: <a href="mailto:leolink.dev@gmail.com" className="text-teal-500 hover:underline visited:text-gray-300">leolink.dev[at]gmail.com</a>
        </p>
      </div>


      <form onSubmit={handleSubmit} className="col-span-12 lg:col-span-7 xl:col-span-6">
        <div className="w-full my-4">
          <label htmlFor="name" className="w-full">Name *</label>
          <input name="name" type="text" className="w-full text-gray-700 p-2" placeholder="Your name" required />
        </div>
        <div className="w-full my-4">
          <label htmlFor="email" className="w-full">Email *</label>
          <input name="email" type="email" className="w-full text-gray-700 p-2" placeholder="Your email" required />
        </div>
        <div className="w-full my-4 ">
          <label htmlFor="name" className="w-full" >Message *</label>
          <textarea name="message" className="w-full h-48 text-gray-700 p-2" placeholder="Your message" required></textarea>
        </div>

        <button type="submit" title="Send message" className="mt-8 py-3 px-5 text-2xl bg-indigo-500 shadow-xl text-gray-200 hover:bg-opacity-80 w-full">
          Send</button>
        <div>
          <p id="result-text"></p>
        </div>
      </form>


    </div>

  )
}