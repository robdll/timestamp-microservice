# **Timestamp microservice**

Microservice API to convert timestamp and dates

## **Installation**

1. clone this repository

```bash
git clone git@github.com:robdll/timestamp-microservice.git
```

2. move to the project directory and install dependecies

```bash
cd timestamp-microservice
yarn
```

3. run locally

```bash
yarn dev
```

4. visit [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## **API usage**

### **URL**

> `<projecturl>`/api/:date

### **ENDPOINT RULES**

date can be either a unix timestamp or a date with the format YYYY-MM-GG

### **RETURNED VALUE**

json object containing the following key/value

`unix`: numeric timestamp  
`utc`: date ISO string

### **EXAMPLE**

> `<projecturl>`/api/:date

```
{
    "unix":1451001600000,
    "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
