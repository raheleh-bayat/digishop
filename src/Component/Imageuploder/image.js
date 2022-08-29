export default function ImageUplaoder(props) {
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    props.productForm.product_image = base64;
    //props.setProductForm({ ...props.productForm, product_image: base64 });
  };

  return <input name="product_image" type="file" onChange={uploadImage} />;
}
