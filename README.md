# GA4 Search Advanced Tracking – GTM Setup

Track which products are shown in the search results of your website and send each as a GA4 event via GTM.

## 🔧 What it does

For each visible product (up to 5), the script pushes a `search_advanced` event to `dataLayer` with the following structure:

```js
{
  event: 'search_advanced',
  action: 'search term from URL',
  label: 'product name',
  category: 'search result',
  value: 1
}
```

## 📂 Files

- `datalayer-script.js`: The tracking script.
- `gtm-setup-guide.md`: Step-by-step GTM setup instructions.
- `README.md`: Overview of the project.

## 📈 Use Cases

- Top searched products
- Searches with no results
- Product impressions by search term
