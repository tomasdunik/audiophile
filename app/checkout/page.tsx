import ButtonGoBack from "../../components/ButtonGoBack";

const CheckoutPage = () => {
  return (
    <>
      <ButtonGoBack />
      <section className="mx-6 mb-[97px] md:mx-10 md:mb-[116px] lg:mx-auto lg:mb-[141px] lg:max-w-[1190px]">
        <div className="rounded-lg bg-white px-6 pt-6 pt-[30px] pb-8 md:px-[27px] md:pb-[30px] lg:mx-6 lg:max-w-[730px] lg:px-12 lg:pt-[54px] lg:pb-12">
          <h1 className="tracking-1 md:tracking-1-14 mb-8 text-2xl leading-38 font-bold md:mb-[41px] md:text-3xl md:leading-36">
            CHECKOUT
          </h1>
          <form action="#" method="post">
            <fieldset>
              <legend className="tracking-0-93 text-orange mb-4 text-xs leading-25 font-bold">
                BILLING DETAILS
              </legend>
              <div className="md:flex md:gap-4">
                <div className="mb-6 flex w-full flex-col gap-[9px]">
                  <label
                    htmlFor="name"
                    className="text-xxs tracking--0-21 leading-16 font-bold"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Alexei Ward"
                    className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                  />
                </div>
                <div className="mb-6 flex w-full flex-col gap-[9px]">
                  <label
                    htmlFor="email"
                    className="text-xxs tracking--0-21 leading-16 font-bold"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="alexei@mail.com"
                    className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                  />
                </div>{" "}
              </div>

              <div className="flex flex-col gap-[9px]">
                <label
                  htmlFor="phone"
                  className="text-xxs tracking--0-21 leading-16 font-bold"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="+1 202-555-0136"
                  className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className="tracking-0-93 text-orange mb-4 text-xs leading-25 font-bold">
                SHIPPING INFO
              </legend>{" "}
              <div className="mb-6 flex w-full flex-col gap-[9px]">
                <label
                  htmlFor="address"
                  className="text-xxs tracking--0-21 leading-16 font-bold"
                >
                  Your Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  placeholder="1137 Williams Avenue"
                  className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                />
              </div>
              <div className="md:flex md:gap-4">
                <div className="mb-6 flex w-full flex-col gap-[9px]">
                  <label
                    htmlFor="zip"
                    className="text-xxs tracking--0-21 leading-16 font-bold"
                  >
                    ZIP Code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="number"
                    autoComplete="postal-code"
                    required
                    placeholder="10001"
                    className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                  />
                </div>
                <div className="mb-6 flex w-full flex-col gap-[9px]">
                  <label
                    htmlFor="city"
                    className="text-xxs tracking--0-21 leading-16 font-bold"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    placeholder="New York"
                    className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                  />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-[9px]">
                <label
                  htmlFor="country"
                  className="text-xxs tracking--0-21 leading-16 font-bold"
                >
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="country-name"
                  required
                  placeholder="United States"
                  className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className="tracking-0-93 text-orange mb-4 text-xs leading-25 font-bold">
                BILLING DETAILS
              </legend>
              <div className="flex flex-col gap-[9px]">
                <label
                  htmlFor="phone"
                  className="text-xxs tracking--0-21 leading-16 font-bold"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="+1 202-555-0136"
                  className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                />
              </div>{" "}
              <div className="md:flex md:gap-4">
                <div className="mb-6 flex w-full flex-col gap-[9px]">
                  <label
                    htmlFor="e-money-number"
                    className="text-xxs tracking--0-21 leading-16 font-bold"
                  >
                    e-Money Number
                  </label>
                  <input
                    id="e-money-number"
                    name="e-money-number"
                    type="number"
                    autoComplete="e-money-number"
                    required
                    placeholder="238521993"
                    className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                  />
                </div>
                <div className="mb-6 flex w-full flex-col gap-[9px]">
                  <label
                    htmlFor="e-money-pin"
                    className="text-xxs tracking--0-21 leading-16 font-bold"
                  >
                    e-Money PIN
                  </label>
                  <input
                    id="e-money-pin"
                    name="e-money-pin"
                    type="number"
                    autoComplete="e-money-pin"
                    required
                    placeholder="6891"
                    className="placeholder-black-40 rounded-lg border border-[#CFCFCF] py-[18px] pl-6 text-sm leading-19 font-bold text-black caret-[#D87D4A] placeholder:text-sm placeholder:leading-19"
                  />
                </div>{" "}
              </div>
            </fieldset>
          </form>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default CheckoutPage;
