export const toCurrency = (amount: number): string => {
    const price = amount || 0;
    return `${price.toLocaleString('vi').replace(/\d(?=(\d{3})+\.)/g, '$&.')}đ`;
};
