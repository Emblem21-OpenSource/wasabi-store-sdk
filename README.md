# WasabiStore

WasabiStore is an AWS S3-compatible library that helps facilitate a landing zone for a data lake using Wasabi's egress-free service.  

Wasabi and Amazon has strict Terms of Service, so it's important to make sure that all data within the landing zone is encrypted before it is sent.  This will help mask the nature of the content within your data lake from internal social justice witch hunts while allowing it to be accessible to the rest of your analysis pipeline.

In the event that Wasabi's egress-free policy changes due to abuse or heavy costs, this library can be easily modified to be a pure S3 library.

Wasabi offers 1TB of storage and/or 1,000 files during a 30 day trial.  They also charge ~$5 a month for that first 1TB.  They also offer free transfer and API calls, but when a file is "deleted" from a bucket, it remains for a mandatory 90 days and it's size counts against your limits, which can make price prediction a bit harder.  As a means of sharing data lake landing zone content between different parts of an analysis pipeline, Wasabi offeres friendly features to get the process started.

## Getting Started

Read these [setup instructions](SETUP.md) to get started.

Review the [Wasabi API](https://wasabi.com/wp-content/uploads/2018/06/Wasabi_API_Guide.pdf?x84297) guide as well for more details.

###

## Usage

WasabiStore can be used purely as a CLI tool or as a library for a larger project.

### CLI

To see all of the CLI options, use the `./wasabiStore --help` command.

### Programmatic

```javascript
const WasabiStore = require('wasabi-store')
const wasabi = WasabiStore()

const bucketUrl = await wasabi.addBucket(bucketName)
const arrayOfResourceUrls = await wasabi.addFile(bucketName, absolutePath, tags, isPublic, encryptionPassword)
const fileDataAndBody = await wasabi.getFile(bucketName, path, asArchive, decryptionPassword)
const stats = await wasabi.getStats(bucketName, path)
const arrayOfFileDataAndBody = await wasabi.listFiles(bucketName)
const bucketRemoved = await wasabi.removeBucket(bucketName)
const fileRemoved = await wasabi.removeFile(bucketName, path)
```

## Feature Requests

* Use IV ciphers for `--encrypt`
* Allow the tagging of resources (Wasabi does not support this but S3 does.)
* Compilation for a standalone CLI binary.

## Data Lake Design

### Landing/raw-data zone

At the first level, the data lake is built separate from core IT systems and serves as a low-cost, scalable, “pure capture” environment. The data lake serves as a thin data-management layer within the company’s technology stack that allows raw data to be stored indefinitely before being prepared for use in computing environments. Organizations can deploy the data lake with minimal effects on the existing architecture. Strong governance, including rigorous tagging and classification of data, is required during this early phase if companies wish to avoid creating a data swamp.

### Data-science environment

At this next level, organizations may start to more actively use the data lake as a platform for experimentation. Data scientists have easy, rapid access to data—and can focus more on running experiments with data and analyzing data, rather than focusing solely on data collection and acquisition. In this sandbox, they can work with unaltered data to build prototypes for analytics programs. They may deploy a range of open-source and commercial tools alongside the data lake to create the required test beds.

### Offload for data warehouses

At the next level, data lakes are starting to be integrated with existing EDWs. Taking advantage of the low storage costs associated with a data lake, companies can house “cold” (rarely used, dormant, or inactive) data. They can use these data to generate insights without pushing or exceeding storage limitations, or without having to dramatically increase the size of traditional data warehouses. Meanwhile, companies can keep high-intensity extraction of relational data in existing EDWs, which have the power to handle them. They can migrate lower-intensity extraction and transformation tasks to the data lake—for instance, a “needle in a haystack” type of search in which data scientists need to sweep databases for queries not supported by traditional index structures.

### Critical component of data operations

Once companies get to this stage of rollout and development, it is very likely that much of the information that flows through the company is going through the data lake. The data lake becomes a core part of the data infrastructure, replacing existing data marts or operational data stores and enabling the provision of data as a service. Businesses can take full advantage of the distributed nature of data-lake technology as well as its ability to handle computing-intensive tasks, such as those required to conduct advanced analytics or to deploy machine-learning programs. Some companies may decide to build data-intensive applications on top of the data lake—for instance, a performance-management dashboard. Or they may implement application programming interfaces so they can seamlessly combine insights gained from data-lake resources with insights gained from other applications.
