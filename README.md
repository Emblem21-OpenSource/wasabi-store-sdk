# WasabiStore

WasabiStore is a library that provides common data lake operations for the egress-free Wasabi service.  Because Wasabi uses AWS S3, this library can also be usable for standard S3 bucket management as well.

# Getting Started

Read these [setup instructions](SETUP.md) to get started.

Review the [Wasabi API](https://wasabi.com/wp-content/uploads/2018/06/Wasabi_API_Guide.pdf?x84297) guide as well for more details.

# Feature Requests

* Use IV ciphers for `--encrypt`
* Allow the tagging of resources (Wasabi does not support this but S3 does.)

# Notes

Landing and raw-data zone. At the first level, the data lake is built separate from core IT systems and serves as a low-cost, scalable, “pure capture” environment. The data lake serves as a thin data-management layer within the company’s technology stack that allows raw data to be stored indefinitely before being prepared for use in computing environments. Organizations can deploy the data lake with minimal effects on the existing architecture. Strong governance, including rigorous tagging and classification of data, is required during this early phase if companies wish to avoid creating a data swamp.

Data-science environment. At this next level, organizations may start to more actively use the data lake as a platform for experimentation. Data scientists have easy, rapid access to data—and can focus more on running experiments with data and analyzing data, rather than focusing solely on data collection and acquisition. In this sandbox, they can work with unaltered data to build prototypes for analytics programs. They may deploy a range of open-source and commercial tools alongside the data lake to create the required test beds.

Offload for data warehouses. At the next level, data lakes are starting to be integrated with existing EDWs. Taking advantage of the low storage costs associated with a data lake, companies can house “cold” (rarely used, dormant, or inactive) data. They can use these data to generate insights without pushing or exceeding storage limitations, or without having to dramatically increase the size of traditional data warehouses. Meanwhile, companies can keep high-intensity extraction of relational data in existing EDWs, which have the power to handle them. They can migrate lower-intensity extraction and transformation tasks to the data lake—for instance, a “needle in a haystack” type of search in which data scientists need to sweep databases for queries not supported by traditional index structures.

Critical component of data operations. Once companies get to this stage of rollout and development, it is very likely that much of the information that flows through the company is going through the data lake. The data lake becomes a core part of the data infrastructure, replacing existing data marts or operational data stores and enabling the provision of data as a service. Businesses can take full advantage of the distributed nature of data-lake technology as well as its ability to handle computing-intensive tasks, such as those required to conduct advanced analytics or to deploy machine-learning programs. Some companies may decide to build data-intensive applications on top of the data lake—for instance, a performance-management dashboard. Or they may implement application programming interfaces so they can seamlessly combine insights gained from data-lake resources with insights gained from other applications.

* Authorization
  * Role Access
  * Encryption
* Domain
  * Name
  * Change Tracking
  * Zones
    * Temporary - Short-lived like temporary copies
    * Raw - Raw
    * Trusted - Qualified and validated data
    * Refined - enriched data