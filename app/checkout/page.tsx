const CheckoutPage = () => {
  return (
    <section>
      <div>
        <h1>CHECKOUT</h1>
        <form action="#" method="post">
          <fieldset>
            <legend>BILLING DETAILS</legend>

            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Alexei Ward"
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="alexei@mail.com"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+1 202-555-0136"
              />
            </div>
          </fieldset>
        </form>
      </div>
      <div></div>
    </section>
  );
};

export default CheckoutPage;
