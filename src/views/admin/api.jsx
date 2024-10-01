const API_URL = "https://ecommerce-api-4jtx.onrender.com"; // Cambia esto por la URL de tu API

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/product/get`);
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/category/get`);
  return response.json();
};

export const addProduct = async (product) => {
  await fetch(`${API_URL}/product/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};

export const fetchOrders = async () => {
  try {
    const response = await fetch("https://ecommerce-api-4jtx.onrender.com/order/get");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

export const updateProduct = async (id, product) => {
  await fetch(`${API_URL}/product/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/product/delete/${id}`, {
    method: "DELETE",
  });
};

export const addCategory = async (category) => {
  await fetch(`${API_URL}/category/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
};

export const updateCategory = async (id, categoryData) => {
  const response = await fetch(`${API_URL}/category/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoryData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar la categoría');
  }
  return await response.json();
};


export const deleteCategory = async (id) => {
  await fetch(`${API_URL}/category/delete/${id}`, {
    method: "DELETE",
  });
};
