# Image credits

## Category photographs

The seven files below ship with the website package and are used for the service
category cards. They were supplied with the site by Arslan Express, not downloaded by
this repository.

| File | Used for | Source |
| --- | --- | --- |
| `product-images/category-cakes.jpg` | Cakes & Bakery | Supplied with the site package |
| `product-images/category-flowers.jpg` | Flowers & Bouquets | Supplied with the site package |
| `product-images/category-gifts.jpg` | Gifts & Gift Cards | Supplied with the site package |
| `product-images/category-shopping.jpg` | Personal Shopping | Supplied with the site package |
| `product-images/category-parcels.jpg` | Parcels & Documents | Supplied with the site package |
| `product-images/category-birthday.jpg` | Birthday Surprises | Supplied with the site package |
| `product-images/category-business.jpg` | Business Delivery | Supplied with the site package |

These are 230x135 JPEG files. Before publishing, confirm that Arslan Express holds the
right to use each one. If a photo came from another website, replace it with your own
picture of the same kind of service.

## Owner portrait

`owner-profile.png` is the founder portrait supplied for this website. It appears in the
hero section and in the About section. The same permission applies: confirm you hold the
right to publish it.

## Product artwork

`product-images/item-001.svg` to `item-121.svg` are catalogue illustrations that shipped
with an earlier version of the package. The current site does not display them; every
product card now shows its category photograph instead. They are kept in the repository
in case you want to switch back. Delete them if you do not.

## Replacing an image

Category photos: keep the same filename and swap in your own picture. They are displayed
at a 460x270 ratio and cropped with `object-fit: cover`, so any landscape photo works.

Product photos: to give an individual item its own picture, add the file to
`product-images/` and set the `image` field for that item in `catalogue.js`.
