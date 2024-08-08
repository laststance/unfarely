'use server'

import { revalidatePath } from 'next/cache'

import { prisma } from '@/lib/prisma'
import type { Category, User } from '@/types/prisma'
import type { ToastMessage } from '@/types/utility'

export async function deleteCategory(
  userId: User['id'],
  categoryId: Category['id'],
): Promise<ToastMessage.Success> {
  await prisma.category.delete({
    where: {
      id: categoryId,
      userId: userId,
    },
  })

  revalidatePath('/dashboard')
  return {
    message: 'Category deleted',
    type: 'success',
  }
}
