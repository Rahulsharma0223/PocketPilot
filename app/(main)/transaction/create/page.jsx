import { getUserAccounts } from '@/actions/dashboard'
import { defaultCategories } from '@/data/categories';
import React from 'react'
import AddTransactionForm from '../_components/transaction-form';

const AddTransactionPage = async () => {
    const accounts =await getUserAccounts();
  return (
    <div className='max-w-3xl mx-auto px-5'>
        <h1 className='text-5xl mb-8 font-extrabold tracking-tighter
                        pr-2 bg-gradient-to-br from-blue-600 to-purple-600 
                        bg-clip-text text-transparent'>
                            Add Transaction
        </h1>

        <AddTransactionForm accounts={accounts} categories={defaultCategories}/>
        
    </div>
  )
}

export default AddTransactionPage
