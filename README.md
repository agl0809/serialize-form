# Serialize Form

Obtain a serialized object of certain form passing the id as an argument:

```javascript
serializeForm('my-form');
```

Document body:

```html
<form id="my-form">
  <input type="text" name="user.name" value="Antonio" />
  <input type="text" name="user.email.primary" />
  <input type="text" name="business" />
</form>
```

Output:

```javascript
{
    user: {
      name: 'Antonio',
      email: {
        primary: ''
      }
    },
    business: ''
};
```
