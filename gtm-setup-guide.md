# GTM Setup – GA4 Advanced Search Tracking

## 🎯 Purpose:
Track products shown in search results using the `search_advanced` event and send them to GA4 through GTM.

## 1. GTM – Data Layer Variables

Create the following 4 Data Layer Variables in GTM:

| Variable Name | Data Layer Variable Name |
|---------------|--------------------------|
| action        | action                   |
| label         | label                    |
| category      | category                 |
| value         | value                    |

## 2. GTM – GA4 Event Tag

**Tag Type:** GA4 Event  
**Event Name:** `search_advanced`  
**Event Parameters:**

| Parameter | Value        |
|-----------|--------------|
| action    | `{{action}}`  
| label     | `{{label}}`  
| category  | `{{category}}`  
| value     | `{{value}}`  

## 3. Trigger

**Trigger Type:** DOM Ready or Page View  
**Condition (optional):** Page URL `contains ?q=`

## ✅ Example dataLayer Push

```js
{
  event: 'search_advanced',
  action: 'rose',
  label: 'Premium 51 Red Rose',
  category: 'search result',
  value: 1
}
```

## 💡 Notes

- Use GA4 DebugView to confirm event firing.
- In Looker Studio, you can use `label` to analyze top viewed products.
