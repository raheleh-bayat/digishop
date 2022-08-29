export default function addProduct(image, name, price) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      title: name,
      price: price + "$",
      name: name,
      about:
        "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
      picture: image,
    },
  };
}
