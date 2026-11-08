import Link from "next/link";
import { Arrow } from "@/components/site-shell";

const references = [
  {
    model: "DJI Matrice 4E",
    use: "Survey and mapping",
    purchase: "$5,189",
    package: "Worry-Free Plus Combo",
    purchaseUrl: "https://store.vertexunmanned.com/products/dji-matrice-4e-worry-free-plus-combo",
    rental: "$200",
    rentalUrl: "https://store.vertexunmanned.com/products/dji-matrice-4e-daily-rental-2-day-minimum",
  },
  {
    model: "DJI Matrice 4T",
    use: "Thermal inspection",
    purchase: "$6,999",
    package: "Combo sale price",
    purchaseUrl: "https://store.vertexunmanned.com/products/dji-matrice-4t-worry-free-plus-combo",
    rental: "$275",
    rentalUrl: "https://store.vertexunmanned.com/products/dji-matrice-4t-daily-rental-2-day-minimum",
  },
  {
    model: "DJI Matrice 400",
    use: "Heavy-lift platform",
    purchase: "$10,450",
    package: "New aircraft listing",
    purchaseUrl: "https://store.vertexunmanned.com/products/dji-matrice-400-sp-plus",
    rental: "$800",
    rentalPackage: "Includes 3 batteries and charger",
    rentalUrl: "https://store.vertexunmanned.com/products/dji-matrice-400-bundle-rental-2-day-minimum",
  },
];

const otherRentals = [
  {
    provider: "Motion Rental",
    location: "San Diego, CA",
    model: "DJI Mavic 3 Fly More Combo",
    rate: "$110",
    terms: "Ask about minimum term",
    url: "https://www.motionrental.com/drones-/-uav/dji%20mavic%203%20fly%20more%20combo",
  },
  {
    provider: "Blue Nose Aerial Imaging",
    location: "Denver, CO",
    model: "DJI Matrice 4E",
    kit: "4 flight batteries",
    rate: "$225",
    terms: "3-day minimum",
    url: "https://bluenoseaerial.com/dronerentals/",
  },
  {
    provider: "Blue Nose Aerial Imaging",
    location: "Denver, CO",
    model: "DJI Matrice 4T",
    kit: "4 flight batteries",
    rate: "$299",
    terms: "3-day minimum",
    url: "https://bluenoseaerial.com/dronerentals/",
  },
  {
    provider: "Blue Skies Drones",
    location: "Centralia, WA",
    model: "DJI Matrice 4T Kit",
    kit: "3 flight batteries",
    rate: "$299",
    terms: "3-day minimum for shipped rentals",
    url: "https://www.blueskiesdronerental.com/rentmy-package-details/matrice-4t-kit-rental/caaaab71fe1611efb42e02304aa5d0a3/",
  },
  {
    provider: "NVisualMedia LLC",
    location: "ShareGrid · Salt Lake City, UT",
    model: "DJI Matrice 4E",
    kit: "1 flight battery",
    rate: "$300",
    weekly: "$900 / week",
    terms: "1-day minimum for local rental",
    url: "https://www.sharegrid.com/salt-lake-city/l/442201?type=rent",
  },
];

export function EquipmentPricing() {
  return (
    <section className="equipment-pricing" id="pricing" aria-labelledby="pricing-title">
      <h2 id="pricing-title">Purchase &amp; rental prices</h2>
      <p className="pricing-source">
        U.S. reference prices from Vertex Unmanned Solutions, checked <time dateTime="2026-11-08">November 8, 2026</time>.
      </p>
      <table className="pricing-table" aria-describedby="pricing-terms">
        <caption className="sr-only">Vertex Unmanned reference prices in U.S. dollars</caption>
        <thead>
          <tr><th scope="col">Aircraft</th><th scope="col">Purchase (USD)</th><th scope="col">Rental (USD)</th></tr>
        </thead>
        <tbody>
          {references.map((item) => (
            <tr key={item.model}>
              <th scope="row">{item.model}<span>{item.use}</span></th>
              <td>
                <strong className="price-value">{item.purchase}</strong>
                <span>{item.package}</span>
                <a href={item.purchaseUrl} aria-label={`Vertex sale listing for ${item.model}`}>Sale listing</a>
              </td>
              <td>
                <strong className="price-value">{item.rental}<small> / day</small></strong>
                <span>2-day minimum</span>
                {item.rentalPackage && <span>{item.rentalPackage}</span>}
                <a href={item.rentalUrl} aria-label={`Vertex rental listing for ${item.model}`}>Rental listing</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p id="pricing-terms" className="pricing-terms">Vertex requires a rental agreement and refundable security deposit. Purchase and rental kits may include different accessories.</p>

      <h3 className="pricing-subtitle" id="rental-comparison">Rental prices from other providers</h3>
      <table className="pricing-table" aria-describedby="rental-reference-terms">
        <caption className="sr-only">Other published U.S. drone rental prices</caption>
        <thead>
          <tr><th scope="col">Provider</th><th scope="col">Aircraft</th><th scope="col">Rental (USD)</th></tr>
        </thead>
        <tbody>
          {otherRentals.map((item) => (
            <tr key={`${item.provider}-${item.model}`}>
              <th scope="row">{item.provider}<span>{item.location}</span></th>
              <td><strong>{item.model}</strong>{item.kit && <span>{item.kit}</span>}</td>
              <td>
                <strong className="price-value">{item.rate}<small> / day</small></strong>
                {item.weekly && <span>{item.weekly}</span>}
                <span>{item.terms}</span>
                <a href={item.url} aria-label={`${item.provider} rental listing for ${item.model}`}>Rental listing</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p id="rental-reference-terms" className="pricing-terms">Rates, rental dates, and fees are confirmed by each provider. For current SALDY1209 pricing and availability, request a quote.</p>
      <Link className="button" href="/contact?service=equipment#inquiry">Request a quote <Arrow direction="up-right" /></Link>
    </section>
  );
}
