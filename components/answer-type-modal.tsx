'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AnswerContentType } from '@/lib/enums';

const items = [
  {
    id: AnswerContentType.Input,
    label: 'Fill in the blank',
    value: AnswerContentType.Input,
  },
  {
    id: AnswerContentType.Choice,
    label: 'Choose correct answer',
    value: AnswerContentType.Choice,
  },
];

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export function AnswerTypeModal({
  answerContentTypes,
  setAnswerContentTypes,
}: {
  answerContentTypes: AnswerContentType[];
  setAnswerContentTypes: (types: AnswerContentType[]) => void;
}) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: answerContentTypes,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (data.items.length) {
      setAnswerContentTypes(data.items as AnswerContentType[]);
      setOpen(false);
    }
  };

  // Reset form when modal is closed
  useEffect(() => {
    if (!open) {
      form.reset({ items: answerContentTypes });
    }
  }, [open, answerContentTypes, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' className='flex gap-3 items-center py-5'>
          <span>Change Types</span>
          <FileSpreadsheet />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='pb-2'>Change Types</DialogTitle>
          <DialogDescription>
            Select the type of questions you want to practice with:
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='items'
              render={() => (
                <FormItem>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='items'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex flex-row items-start space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className='text-sm font-normal'>
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type='submit'>Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
