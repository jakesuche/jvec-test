



const ClientsWeServe = () => {
  const clients = [
    {
      title: "HOMEOWNERS",
      icon: '',
      description:
        "Whether moving across town or to a new state, we help homeowners transition smoothly",
    },
    {
      title: "RENTERS",
      icon: '',
      description:
        "We assist renters with their moves, ensuring they leave their rental properties clean and in good condition.",
    },
    {
      title: "BUSINESSES",
      icon:'',
      description:
        "Our commercial moving services help businesses relocate with minimal disruption.",
    },
    {
      title: "PROPERTY MANAGERS",
      icon: '',
      description:
        "We partner with property managers to offer seamless moving services for their tenants.",
    },
  ];

  return (
    <section className="clients-we-serve__wrapper">
      <div className="clients-we-serve">
        <h2>CLIENTS WE SERVE</h2>
        <h3>OUR SERVICES CATER TO</h3>
        <div className="client-cards">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="icon-wrapper">icon</div>
              <h3>{client.title}</h3>
              <p>{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsWeServe;
