function suppliersData() {
    return {
        suppliers: [],
        loadSuppliers() {
            axios.get('http://127.0.0.1:8000/api/suppliers')
            .then(
                (response) => {
                    this.suppliers = response.data;
                }
            )
            .catch(
                (error) => {
                console.log(error)
                }
            );
        },
        addSupplier() {
            var formData = new FormData(this.$refs.supplierForm);
            axios.post('http://127.0.0.1:8000/api/suppliers', formData, { headers: {'Content-Type': 'multipart/form-data'} } )
            .then(
                (response) => {
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
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                );
            },
        updateSupplier() {
            // var formData = new FormData();
            // var imagefile = document.querySelector('#file');
        },
    }
}
