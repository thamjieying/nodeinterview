Observations:
- there is a model for the Clients
- Database: AWS
- using middleware for http processing: KOA
- Config folder stores all the environment variable (e.g. keys for production, staging and the development) with the default setting which are not influenced by the production/staging/development.
- have not found out what the swagger file in the docs folder is for, but assumes it specifies some information requried for the package.
- the src folder contains most of the files are the required for the backend services.

  - app file specifies all the required modules that are defined in the rest of the repo, and connects the functions together.
  - router determine the routes to the apis.


  - Configuration used for the aws is specified in the configs folder.
  - middleware folder contains all the middleware the are used to link up the functions properly.
  - services folder contains also contains the function what are used to query the database which are collated by the function in the controller functions.
