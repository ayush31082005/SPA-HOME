import { useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import TextAreaField from "../common/TextAreaField";
import PrimaryButton from "../common/PrimaryButton";
import coverageData from "../../data/coverageData";
import servicesData from "../../data/servicesData";

export default function BookingFormSection() {
  const allServices = [
    ...servicesData.massageServices.map((item) => item.title),
    ...servicesData.comboPackages.map((item) => item.title),
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    serviceLocation: "Home",
    dateTime: "",
    request: "",
  });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("https://spa-home.onrender.com/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.name,
          phoneNumber: form.phone,
          location: form.location,
          serviceType: form.service,
          serviceLocation: form.serviceLocation,
          dateTime: form.dateTime,
          specialRequest: form.request,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Booking Saved Successfully ✅");
      } else {
        alert("Failed ❌");
      }

    } catch (error) {
      console.log(error);
      alert("Server error ❌");
    }
  };

  return (
    <section id="booking" className="section-space">
      <Container>
        <SectionHeading
          label="Book Your Spa Session"
          title="Fill the form and get confirmation within 5–10 minutes"
          description="Your details are safe and confidential. No spam, quick response, and verified service support."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:gap-8">
          <form onSubmit={handleSubmit} className="card-base p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField label="Full Name" name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange} required />
              <InputField label="Phone Number (WhatsApp)" name="phone" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} required />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <SelectField label="Location" name="location" value={form.location} onChange={handleChange} required>
                <option value="">Select location</option>
                {coverageData.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </SelectField>

              <SelectField label="Service Type" name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select service</option>
                {allServices.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </SelectField>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <SelectField label="Service Location" name="serviceLocation" value={form.serviceLocation} onChange={handleChange}>
                <option value="Home">Home</option>
                <option value="Hotel">Hotel</option>
              </SelectField>

              <InputField label="Date & Time" name="dateTime" type="datetime-local" value={form.dateTime} onChange={handleChange} required />
            </div>

            <div className="mt-5">
              <TextAreaField label="Special Request (Optional)" name="request" placeholder="Mention any preferences or additional request" value={form.request} onChange={handleChange} />
            </div>

            <div className="mt-6">
              <PrimaryButton type="submit" className="w-full sm:w-auto">Book Now</PrimaryButton>
            </div>
          </form>

          <div className="card-base overflow-hidden bg-gradient-to-br from-[#fff1f4] to-[#eef7f2] p-5 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary">Why clients choose us</h3>
            <div className="mt-6 space-y-4">
              {[
                "Safe and confidential booking process",
                "Quick response and same-day availability",
                "Professional service at home or hotel",
                "Premium oils and hygiene kit included",
              ].map((point) => (
                <div key={point} className="rounded-3xl border border-secondary/10 bg-white/70 px-4 py-4 sm:px-5 text-sm font-medium text-secondary">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
