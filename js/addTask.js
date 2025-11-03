//file ini untuk penghubung antara UI HTML dan model User

document.addEventListener('DOMContentLoaded', () => {

    //membuatn tanggal yang diharapkan berformat 'yyyy-mm-dd'
    const now = new Date();
    const year = now.getFullYear();

    //+1 untuk dimuali dari bulan ini jika tidak ada jadi bulan sebelumnya
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0'); //padstart digunakan untuk double angka contoh '01'

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
            createdAt: `${year}-${month}-${day}`,
        };

        const result = taskManager.saveTask(taskData);

        if(result.success){
            // return window.location.href ='../taskia/signin.html'; 
            alert('berhasil tersimpan')
        }
        else{
            console.log('proses simpan data gagal')
        }

    });
});