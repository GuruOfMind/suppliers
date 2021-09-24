function suppliersData() {
    return {
        suppliers: [],
        suppliersListLength: 0,
        loadSuppliers() {
            axios.get('http://127.0.0.1:8000/api/suppliers')
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
            axios.post('http://127.0.0.1:8000/api/suppliers', formData, { headers: {'Content-Type': 'multipart/form-data'} } )
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
                axios.delete(`http://127.0.0.1:8000/api/suppliers/${supplierId}/delete`)
                .then(
                    (response) => {
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
