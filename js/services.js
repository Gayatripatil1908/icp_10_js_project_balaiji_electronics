// JavaScript to display detailed information about the services when clicked
function showDetails(service) {
    const serviceDetails = {
        'product-sales': {
            title: 'Product Sales',
            description: 'We offer a wide variety of electronics, including home appliances, mobile devices, and consumer electronics like TVs, refrigerators, and more. Our products are sourced from top brands to ensure the best quality.'
        },
        'repair-services': {
            title: 'Repair & Maintenance',
            description: 'We provide expert repair services for all kinds of electronics, including televisions, laptops, mobile phones, and household appliances. Our skilled technicians ensure the job is done right, quickly, and at a competitive price.'
        },
        'installation-services': {
            title: 'Installation Services',
            description: 'Our team can help you with the professional setup of your electronics, whether it’s installing your new TV, setting up home theater systems, or configuring office electronics. We ensure everything is working perfectly.'
        },
        'consultation': {
            title: 'Consultation & Customization',
            description: 'Looking for a tailored solution? Our consultation service helps you design customized electronic systems to meet your unique needs. Whether it’s home automation or business setups, we provide expert advice.'
        },
        'bulk-orders': {
            title: 'Bulk Orders & Corporate Solutions',
            description: 'For businesses and corporate clients, we offer bulk orders for electronics with competitive pricing. We also provide special packages, including extended warranties, making it easy to scale your office or industrial needs.'
        },
        'after-sales': {
            title: 'After-Sales Support',
            description: 'We stand by our products and services, offering comprehensive after-sales support. From warranty services to troubleshooting and maintenance, our team is here to assist you long after your purchase.'
        }
    };

    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');
    const serviceSection = document.getElementById('service-details');

    serviceTitle.textContent = serviceDetails[service].title;
    serviceDescription.textContent = serviceDetails[service].description;
    
    // Show the service details section
    serviceSection.style.display = 'block';
}
