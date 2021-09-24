const baseURL = 'https://am-api.000webhostapp.com';
function suppliersData() {
    return {
        suppliers: [],
        suppliersListLength: 0,
        loadSuppliers() {
            axios.get(`${baseURL}/api/suppliers`)
            .then(
                (response) => {
                    this.suppliers = response.data;
                    this.suppliersListLength = this.suppliers.length;
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
        },
        addSupplier() {
            var formData = new FormData(this.$refs.supplierForm);
            axios.post(`${baseURL}/api/suppliers`, formData, { headers: {'Content-Type': 'multipart/form-data'} } )
            .then(
                (response) => {
                    console.log(formData);
                    this.$refs.supplierForm.reset();
                    this.loadSuppliers();
                }
            )
            .catch(
                (error) => {
                    console.log("error", error);
                }
            );
        },
        deleteSupplier(supplierId) {
                axios.delete(`${baseURL}/api/suppliers/${supplierId}/delete`)
                .then(
                    (response) => {
                        console.log(response.status);
                        let removeIndex = this.suppliers.map(item => item.id).indexOf(supplierId);
                        ~removeIndex && this.suppliers.splice(removeIndex, 1);
                        this.suppliersListLength--;
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                );
            },
        updateSupplier() {
        },
    }
}
